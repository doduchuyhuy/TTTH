/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
        { name: 'insert' },
        { name: 'others' },
        { name: 'basicstyles', groups: [ 'basicstyles' ] },
        { name: 'paragraph',   groups: [ 'list', 'indent', 'align', 'bidi' ] },
        
    ];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Subscript,Superscript';
	config.height = 90; 

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	config.extraPlugins = 'mathjax';
    config.mathJaxLib = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML';

	config.forcePasteAsPlainText = true;
	config.allowedContent = {
        $1: {
            // Sử dụng các thẻ và thuộc tính mặc định của CKEditor,
            // nhưng thêm vào đó là việc cho phép tất cả class và style.
            elements: CKEDITOR.dtd,
            attributes: true,
            styles: true,
            classes: true
        }
    };

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
};
