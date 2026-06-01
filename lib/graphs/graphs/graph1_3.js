let cy1_3 = cytoscape({
  container: document.getElementById('graph1-3-cy'),
  elements: data.elements,
  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'center',
        'font-family': "Helvetica,Arial,sans-serif",
        'background-color': 'data(backgroundColor1)',
        'border-width': 4,
        'border-color': 'black',
        'width' : 40,
        'height': 40
      }
    },
    {
      selector: 'edge',
      style: {
        'control-point-distances': 0,
        'control-point-weights': 0.5,
        'edge-distances': 'node-position',
        'curve-style': 'unbundled-bezier'
      }
    },
    {
        selector: 'node.selected',
        style: {
            'background-color': 'green'
        }
    },
    {
        selector: 'node.highlight',
        style: {
            'background-color': 'orange'
        }
    },
    {
        selector: 'node.highlightRight',
        style: {
            'background-color': 'blue'
        }
    },
    {
        selector: 'node.highlightLeft',
        style: {
            'background-color': 'red'
        }
    },
    {
        selector: 'node.semitransp',
        style:{ 'opacity': '0.5' }
    },
    {
        selector: 'edge.highlight',
        style: { 'mid-target-arrow-color': '#FFF', lineColor: 'blue' }
    },
    {
        selector: 'edge.semitransp',
        style:{ 'opacity': '0.2' }
    }
  ],
  layout: {
    name: 'preset',
    fit: true,
    positions: function(node){return node._private.data.position7}
  }
});

cy1_3.on('mouseover', 'node', function(e){
  var sel = e.target;
  highlight(sel, cy1_3);
});
cy1_3.on('mouseout', 'node', function(e){
  dehighlight(cy1_3);
});

cy1_3.on('mouseover', 'edge', function(e){
  var sel = e.target;
  sel.addClass('highlight');
});
cy1_3.on('mouseout', 'edge', function(e){
  var sel = e.target;
  sel.removeClass('highlight');
});

var cytoEventHandler = function(event) {
  if (event.currentSlide.id === 'graph1_3') {
    for(let i = 0; i < 8; i++) {
      cy1_3.nodes()[i].animate({
        css: {
          'background-color': 'blue',
          'color': 'white'
          }
        },{
        duration: 0
        }
      );
    }
    for(let i = 8; i < 12; i++) {
      cy1_3.nodes()[i].animate({
        css: {
          'background-color': 'red',
          }
        },{
        duration: 0
        }
      );
    }

    cy1_3.zoom(1.65)
    cy1_3.center()
    // layoutanimation(7, cy1_3);
  }
}

Reveal.addEventListener('slidechanged', cytoEventHandler);