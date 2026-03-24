#!/usr/bin/env node
// ==========================================================================
//  Creates a minimal valid PPTX with known theme colors for testing
//  the extract-theme.js script. Uses sysClr for dk1 to test both code paths.
// ==========================================================================

const AdmZip = require('adm-zip');
const path = require('path');

const zip = new AdmZip();

// [Content_Types].xml
zip.addFile('[Content_Types].xml', Buffer.from(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="xml" ContentType="application/xml"/>
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="png" ContentType="image/png"/>
  <Override PartName="/ppt/presentation.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
  <Override PartName="/ppt/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/>
</Types>`));

// _rels/.rels
zip.addFile('_rels/.rels', Buffer.from(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="ppt/presentation.xml"/>
</Relationships>`));

// ppt/presentation.xml (minimal)
zip.addFile('ppt/presentation.xml', Buffer.from(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:presentation xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
</p:presentation>`));

// ppt/theme/theme1.xml with KNOWN test values
// Uses sysClr for dk1 (to test both color format code paths) and srgbClr for all others
zip.addFile('ppt/theme/theme1.xml', Buffer.from(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Test Theme">
  <a:themeElements>
    <a:clrScheme name="Test Colors">
      <a:dk1><a:sysClr val="windowText" lastClr="1A1A1A"/></a:dk1>
      <a:lt1><a:srgbClr val="FAFAFA"/></a:lt1>
      <a:dk2><a:srgbClr val="2B4C7E"/></a:dk2>
      <a:lt2><a:srgbClr val="E8ECF1"/></a:lt2>
      <a:accent1><a:srgbClr val="3498DB"/></a:accent1>
      <a:accent2><a:srgbClr val="E74C3C"/></a:accent2>
      <a:accent3><a:srgbClr val="2ECC71"/></a:accent3>
      <a:accent4><a:srgbClr val="9B59B6"/></a:accent4>
      <a:accent5><a:srgbClr val="1ABC9C"/></a:accent5>
      <a:accent6><a:srgbClr val="F39C12"/></a:accent6>
      <a:hlink><a:srgbClr val="2980B9"/></a:hlink>
      <a:folHlink><a:srgbClr val="8E44AD"/></a:folHlink>
    </a:clrScheme>
    <a:fontScheme name="Test Fonts">
      <a:majorFont><a:latin typeface="Calibri Light"/></a:majorFont>
      <a:minorFont><a:latin typeface="Calibri"/></a:minorFont>
    </a:fontScheme>
    <a:fmtScheme name="Test Format"></a:fmtScheme>
  </a:themeElements>
</a:theme>`));

// ppt/media/test-logo.png -- a tiny 1x1 transparent PNG (valid PNG file)
const tinyPng = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);
zip.addFile('ppt/media/test-logo.png', tinyPng);

// Write the PPTX
const outputPath = path.join(__dirname, 'sample-theme.pptx');
zip.writeZip(outputPath);
console.log('Created:', outputPath);
