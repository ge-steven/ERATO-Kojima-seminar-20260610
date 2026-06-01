let cy1_corestab = cytoscape({
  container: document.getElementById('graph1-corestab'),
  elements: data_corestab.elements,
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
    positions: function(node){return node._private.data.position6}
  }
});

cy1_corestab.on('mouseover', 'node', function(e){
  var sel = e.target;
  highlight(sel, cy1_corestab);
});
cy1_corestab.on('mouseout', 'node', function(e){
  dehighlight(cy1_corestab);
});

cy1_corestab.on('mouseover', 'edge', function(e){
  var sel = e.target;
  sel.addClass('highlight');
});
cy1_corestab.on('mouseout', 'edge', function(e){
  var sel = e.target;
  sel.removeClass('highlight');
});

var cytoEventHandler = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph1-corestab-1') {
    layoutanimation(7, cy1_corestab)
  }
  else if (event.fragment.id == 'graph1-corestab-2') {
    var greenids = [2,6,10];
    for(let i = 0; i < greenids.length; i++) {
      cy1_corestab.nodes()[greenids[i]].animate({
        css: {
          'background-color': 'lightgreen',
          'color': 'black'
          }
        },{
        duration: 200
        }
      );
    }
  }
  else if (event.fragment.id == 'graph1-corestab-3') {
    var redids = [0,1,3,4,5,7,8,9,11];
    
    for(let i = 0; i < redids.length; i++) {
      cy1_corestab.nodes()[redids[i]].animate({
        css: {
          'background-color': 'red',
          'color': 'black'
          }
        },{
        duration: 200
        }
      );
    }
  }
}

Reveal.addEventListener('fragmentshown', cytoEventHandler);


var cytoEventHandler = function(event) {
  // console.log(event)
  if(event.previousSlide.id === 'graph2_mrp') {
    cy1_corestab.zoom(1.65)
    cy1_corestab.center()
    // layoutanimation(6, cy1_corestab);
  }
}


Reveal.addEventListener('slidechanged', cytoEventHandler);

var cytoEventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph1-corestab-1') {
    layoutanimation(6, cy1_corestab)
  }
  else if (event.fragment.id == 'graph1-corestab-2') {
    var greenids = [2,6,10];
    for(let i = 0; i < greenids.length; i++) {
      cy1_corestab.nodes()[greenids[i]].animate({
        css: {
          'background-color': 'white',
          'color': 'black'
          }
        },{
        duration: 200
        }
      );
    }
  }
  else if (event.fragment.id == 'graph1-corestab-3') {
    var redids = [0,1,3,4,5,7,8,9,11];
    
    for(let i = 0; i < redids.length; i++) {
      cy1_corestab.nodes()[redids[i]].animate({
        css: {
          'background-color': 'white',
          'color': 'black'
          }
        },{
        duration: 200
        }
      );
    }
  }
}


Reveal.addEventListener('fragmenthidden', cytoEventHandlerBack);
