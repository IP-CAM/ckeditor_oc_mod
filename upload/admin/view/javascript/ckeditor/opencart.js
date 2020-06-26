$(document).ready(function() {
    ClassicEditor
			.create( document.querySelector( '.summernote' ), {
				toolbar: {
					items: [
						'heading',
						'|',
						'undo',
						'redo',
						'|',
						'fontFamily',
						'fontSize',
						'fontColor',
						'|',
						'bold',
						'italic',
						'strikethrough',
						'underline',
						'removeFormat',
						'horizontalLine',
						'bulletedList',
						'numberedList',
						'|',
						'indent',
						'outdent',
						'alignment',
						'|',
						'link',
						'imageUpload',
						'mediaEmbed',
						'insertTable',
						'blockQuote',
						'code',
						'specialCharacters'
					]
				},
				language: 'ru',
				image: {
					toolbar: [
						'imageTextAlternative',
						'imageStyle:full',
						'imageStyle:side'
					]
				},
				table: {
					contentToolbar: [
						'tableColumn',
						'tableRow',
						'mergeTableCells',
						'tableCellProperties',
						'tableProperties'
					]
				},
				licenseKey: '',
			} )
			.then( editor => {
				window.editor = editor;
			} )
			.catch( error => {
				console.error( 'Oops, something gone wrong!' );
				console.error( 'Please, report the following error in the https://github.com/ckeditor/ckeditor5 with the build id and the error stack trace:' );
				console.warn( 'Build id: serg9urn0j0-enrc9c3kh6w5' );
				console.error( error );
			} );
});