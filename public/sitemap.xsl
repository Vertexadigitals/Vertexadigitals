<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html lang="en">
<head>
<title>XML Sitemap — Vertexa Digitals</title>
<meta charset="UTF-8"/>
<meta name="robots" content="noindex"/>
<style>
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 48px 24px;
    background: #fafafa;
    color: #171717;
  }
  .wrap { max-width: 1000px; margin: 0 auto; }
  h1 {
    font-size: 28px;
    font-weight: 600;
    margin: 0 0 8px;
    letter-spacing: -0.01em;
  }
  .meta {
    color: #737373;
    font-size: 14px;
    margin: 0 0 32px;
  }
  .meta strong { color: #171717; font-weight: 600; }
  table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    overflow: hidden;
  }
  thead th {
    text-align: left;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #737373;
    padding: 14px 16px;
    border-bottom: 1px solid #e5e5e5;
    background: #fafafa;
  }
  tbody td {
    padding: 12px 16px;
    border-bottom: 1px solid #f0f0f0;
    font-size: 14px;
    vertical-align: top;
  }
  tbody tr:last-child td { border-bottom: none; }
  tbody tr:hover { background: #fafafa; }
  a {
    color: #171717;
    text-decoration: none;
    font-weight: 500;
    word-break: break-all;
  }
  a:hover { text-decoration: underline; }
  .col-num { color: #a3a3a3; font-size: 13px; width: 40px; }
  .col-freq, .col-priority { color: #525252; white-space: nowrap; }
  .col-priority { text-align: right; font-variant-numeric: tabular-nums; }
  footer {
    margin-top: 24px;
    font-size: 13px;
    color: #a3a3a3;
    text-align: center;
  }
</style>
</head>
<body>
<div class="wrap">
  <h1>XML Sitemap</h1>
  <p class="meta">
    <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs &#8212; generated for search engine crawlers. This styled view is for humans; crawlers read the raw XML directly.
  </p>
  <table>
    <thead>
      <tr>
        <th class="col-num">#</th>
        <th>URL</th>
        <th>Last Modified</th>
        <th class="col-freq">Change Frequency</th>
        <th class="col-priority">Priority</th>
      </tr>
    </thead>
    <tbody>
      <xsl:for-each select="sitemap:urlset/sitemap:url">
        <tr>
          <td class="col-num"><xsl:value-of select="position()"/></td>
          <td>
            <a href="{sitemap:loc}">
              <xsl:value-of select="sitemap:loc"/>
            </a>
          </td>
          <td><xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/></td>
          <td class="col-freq"><xsl:value-of select="sitemap:changefreq"/></td>
          <td class="col-priority"><xsl:value-of select="sitemap:priority"/></td>
        </tr>
      </xsl:for-each>
    </tbody>
  </table>
  <footer>Vertexa Digitals</footer>
</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
