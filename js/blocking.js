function replace() {
	tags = document.getElementsByTagName('*');

	for ( var i = 0; i < tags.length; i++) {
		var element = tags[i];

		for ( var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if ( node.nodeType === 3 ) {
				var text = node.nodeValue;
				var newText = text.replace( /Monitor/gi, 'stuff' );

				if ( newText !== text ) {
					element.replaceChild( document.createTextNode(newText), node );
				}
			}
		}
	}
}

replace();