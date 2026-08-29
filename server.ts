import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import * as storage from './server/storage';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser with 15MB limit for custom profile avatar uploads and base64 payloads
  app.use(express.json({ limit: '15mb' }));
  app.use(express.urlencoded({ extended: true, limit: '15mb' }));

  // ==========================================
  // API ROUTES
  // ==========================================

  // Health check
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      service: 'Portfolio Full-Stack CMS & SEO API'
    });
  });

  // Complete Portfolio Database
  app.get('/api/portfolio', (req: Request, res: Response) => {
    try {
      const db = storage.getDatabase();
      res.json({ success: true, data: db });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // Reset to Factory Defaults
  app.post('/api/portfolio/reset', (req: Request, res: Response) => {
    try {
      const fresh = storage.resetDatabase();
      res.json({ success: true, message: 'Database reset to default template', data: fresh });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // Restore Database Backup
  app.post('/api/portfolio/restore', (req: Request, res: Response) => {
    try {
      const payload = req.body;
      if (!payload || typeof payload !== 'object') {
        return res.status(400).json({ success: false, error: 'Invalid JSON payload' });
      }
      const restored = storage.restoreDatabase(payload);
      res.json({ success: true, message: 'Database restored successfully', data: restored });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // ------------------------------------------
  // Profile & Personal Info
  // ------------------------------------------
  app.get('/api/profile', (req: Request, res: Response) => {
    res.json({ success: true, data: storage.getProfile() });
  });

  app.put('/api/profile', (req: Request, res: Response) => {
    try {
      const updated = storage.updateProfile(req.body);
      res.json({ success: true, data: updated });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // ------------------------------------------
  // Statistics
  // ------------------------------------------
  app.get('/api/stats', (req: Request, res: Response) => {
    res.json({ success: true, data: storage.getStats() });
  });

  app.put('/api/stats', (req: Request, res: Response) => {
    try {
      const stats = storage.updateStats(req.body);
      res.json({ success: true, data: stats });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // ------------------------------------------
  // Skills
  // ------------------------------------------
  app.get('/api/skills', (req: Request, res: Response) => {
    res.json({ success: true, data: storage.getSkills() });
  });

  app.post('/api/skills', (req: Request, res: Response) => {
    try {
      const skill = storage.createSkill(req.body);
      res.status(201).json({ success: true, data: skill });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.put('/api/skills/:id', (req: Request, res: Response) => {
    try {
      const updated = storage.updateSkill(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ success: false, error: 'Skill not found' });
      }
      res.json({ success: true, data: updated });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.delete('/api/skills/:id', (req: Request, res: Response) => {
    try {
      const deleted = storage.deleteSkill(req.params.id);
      if (!deleted) {
        return res.status(404).json({ success: false, error: 'Skill not found' });
      }
      res.json({ success: true, message: 'Skill deleted' });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // ------------------------------------------
  // Projects
  // ------------------------------------------
  app.get('/api/projects', (req: Request, res: Response) => {
    res.json({ success: true, data: storage.getProjects() });
  });

  app.post('/api/projects', (req: Request, res: Response) => {
    try {
      const proj = storage.createProject(req.body);
      res.status(201).json({ success: true, data: proj });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.put('/api/projects/:id', (req: Request, res: Response) => {
    try {
      const updated = storage.updateProject(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ success: false, error: 'Project not found' });
      }
      res.json({ success: true, data: updated });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.delete('/api/projects/:id', (req: Request, res: Response) => {
    try {
      const deleted = storage.deleteProject(req.params.id);
      if (!deleted) {
        return res.status(404).json({ success: false, error: 'Project not found' });
      }
      res.json({ success: true, message: 'Project deleted' });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // ------------------------------------------
  // Experience
  // ------------------------------------------
  app.get('/api/experience', (req: Request, res: Response) => {
    res.json({ success: true, data: storage.getExperience() });
  });

  app.post('/api/experience', (req: Request, res: Response) => {
    try {
      const exp = storage.createExperience(req.body);
      res.status(201).json({ success: true, data: exp });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.put('/api/experience/:id', (req: Request, res: Response) => {
    try {
      const updated = storage.updateExperience(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ success: false, error: 'Experience item not found' });
      }
      res.json({ success: true, data: updated });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.delete('/api/experience/:id', (req: Request, res: Response) => {
    try {
      const deleted = storage.deleteExperience(req.params.id);
      if (!deleted) {
        return res.status(404).json({ success: false, error: 'Experience item not found' });
      }
      res.json({ success: true, message: 'Experience item deleted' });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // ------------------------------------------
  // Certifications
  // ------------------------------------------
  app.get('/api/certifications', (req: Request, res: Response) => {
    res.json({ success: true, data: storage.getCertifications() });
  });

  app.post('/api/certifications', (req: Request, res: Response) => {
    try {
      const cert = storage.createCertification(req.body);
      res.status(201).json({ success: true, data: cert });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.put('/api/certifications/:id', (req: Request, res: Response) => {
    try {
      const updated = storage.updateCertification(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ success: false, error: 'Certification not found' });
      }
      res.json({ success: true, data: updated });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.delete('/api/certifications/:id', (req: Request, res: Response) => {
    try {
      const deleted = storage.deleteCertification(req.params.id);
      if (!deleted) {
        return res.status(404).json({ success: false, error: 'Certification not found' });
      }
      res.json({ success: true, message: 'Certification deleted' });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // ------------------------------------------
  // Work Process (10 Phases)
  // ------------------------------------------
  app.get('/api/process', (req: Request, res: Response) => {
    res.json({ success: true, data: storage.getWorkProcess() });
  });

  app.put('/api/process', (req: Request, res: Response) => {
    try {
      const updated = storage.updateWorkProcess(req.body);
      res.json({ success: true, data: updated });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // ------------------------------------------
  // Blog / Articles
  // ------------------------------------------
  app.get('/api/blog', (req: Request, res: Response) => {
    res.json({ success: true, data: storage.getBlogPosts() });
  });

  app.post('/api/blog', (req: Request, res: Response) => {
    try {
      const post = storage.createBlogPost(req.body);
      res.status(201).json({ success: true, data: post });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.put('/api/blog/:id', (req: Request, res: Response) => {
    try {
      const updated = storage.updateBlogPost(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ success: false, error: 'Blog post not found' });
      }
      res.json({ success: true, data: updated });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.delete('/api/blog/:id', (req: Request, res: Response) => {
    try {
      const deleted = storage.deleteBlogPost(req.params.id);
      if (!deleted) {
        return res.status(404).json({ success: false, error: 'Blog post not found' });
      }
      res.json({ success: true, message: 'Blog post deleted' });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // ------------------------------------------
  // FAQs
  // ------------------------------------------
  app.get('/api/faq', (req: Request, res: Response) => {
    res.json({ success: true, data: storage.getFAQ() });
  });

  app.post('/api/faq', (req: Request, res: Response) => {
    try {
      const faq = storage.createFAQ(req.body);
      res.status(201).json({ success: true, data: faq });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.put('/api/faq/:id', (req: Request, res: Response) => {
    try {
      const updated = storage.updateFAQ(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ success: false, error: 'FAQ not found' });
      }
      res.json({ success: true, data: updated });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.delete('/api/faq/:id', (req: Request, res: Response) => {
    try {
      const deleted = storage.deleteFAQ(req.params.id);
      if (!deleted) {
        return res.status(404).json({ success: false, error: 'FAQ not found' });
      }
      res.json({ success: true, message: 'FAQ deleted' });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // ------------------------------------------
  // Resume & Education
  // ------------------------------------------
  app.get('/api/resume', (req: Request, res: Response) => {
    res.json({ success: true, data: storage.getResumeData() });
  });

  app.put('/api/resume', (req: Request, res: Response) => {
    try {
      const updated = storage.updateResumeData(req.body);
      res.json({ success: true, data: updated });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // ------------------------------------------
  // SEO Settings & Live Audit
  // ------------------------------------------
  app.get('/api/seo', (req: Request, res: Response) => {
    res.json({ success: true, data: storage.getSEOSettings() });
  });

  app.put('/api/seo', (req: Request, res: Response) => {
    try {
      const updated = storage.updateSEOSettings(req.body);
      res.json({ success: true, data: updated });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.get('/api/seo/audit', (req: Request, res: Response) => {
    try {
      const report = storage.performSEOAudit();
      res.json({ success: true, data: report });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // ------------------------------------------
  // Contact Messages Inbox
  // ------------------------------------------
  app.get('/api/messages', (req: Request, res: Response) => {
    res.json({ success: true, data: storage.getMessages() });
  });

  app.post('/api/messages', (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'Name, email, and message are required' });
      }
      const newMsg = storage.createMessage({
        name: String(name).trim(),
        email: String(email).trim(),
        subject: String(subject || 'General Inquiry').trim(),
        message: String(message).trim()
      });
      res.status(201).json({ success: true, message: 'Message sent successfully', data: newMsg });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.patch('/api/messages/:id', (req: Request, res: Response) => {
    try {
      const { status, notes } = req.body;
      const updated = storage.updateMessageStatus(req.params.id, status, notes);
      if (!updated) {
        return res.status(404).json({ success: false, error: 'Message not found' });
      }
      res.json({ success: true, data: updated });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.delete('/api/messages/:id', (req: Request, res: Response) => {
    try {
      const deleted = storage.deleteMessage(req.params.id);
      if (!deleted) {
        return res.status(404).json({ success: false, error: 'Message not found' });
      }
      res.json({ success: true, message: 'Message deleted' });
    } catch (err: any) {
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // ------------------------------------------
  // Dynamic XML Sitemap & Robots.txt
  // ------------------------------------------
  const generateSitemap = (): string => {
    const seo = storage.getSEOSettings();
    const blogPosts = storage.getBlogPosts();
    const baseUrl = seo.canonicalUrl || 'https://shosunth.dev';
    const lastMod = new Date().toISOString().split('T')[0];

    const sections = ['#home', '#about', '#skills', '#resume', '#projects', '#experience', '#certifications', '#process', '#blog', '#faq', '#contact'];

    let urlsXml = `  <url>\n    <loc>${baseUrl}/</loc>\n    <lastmod>${lastMod}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

    sections.forEach((sec) => {
      urlsXml += `  <url>\n    <loc>${baseUrl}/${sec}</loc>\n    <lastmod>${lastMod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    });

    blogPosts.forEach((post) => {
      urlsXml += `  <url>\n    <loc>${baseUrl}/blog/${post.slug}</loc>\n    <lastmod>${lastMod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}</urlset>`;
  };

  app.get('/api/sitemap.xml', (req: Request, res: Response) => {
    res.header('Content-Type', 'application/xml');
    res.send(generateSitemap());
  });

  app.get('/sitemap.xml', (req: Request, res: Response) => {
    res.header('Content-Type', 'application/xml');
    res.send(generateSitemap());
  });

  const generateRobots = (): string => {
    const seo = storage.getSEOSettings();
    const baseUrl = seo.canonicalUrl || 'https://shosunth.dev';
    if (!seo.robotsIndex) {
      return `User-agent: *\nDisallow: /\n`;
    }
    return `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
  };

  app.get('/api/robots.txt', (req: Request, res: Response) => {
    res.header('Content-Type', 'text/plain');
    res.send(generateRobots());
  });

  app.get('/robots.txt', (req: Request, res: Response) => {
    res.header('Content-Type', 'text/plain');
    res.send(generateRobots());
  });

  // ==========================================
  // VITE & STATIC SERVING
  // ==========================================
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio Full-Stack Server & SEO Engine running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
