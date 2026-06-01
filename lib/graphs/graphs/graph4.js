let cy4 = cytoscape({
  container: document.getElementById('graph4-cy'),
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
        'curve-style': 'unbundled-bezier', 
        'lineColor': 'black',
        'opacity': '0.0'
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
    positions: function(node){return node._private.data.position1}
  }
});

cy4.on('mouseover', 'node', function(e){
  var sel = e.target;
  highlight(sel, cy4);
});
cy4.on('mouseout', 'node', function(e){
  dehighlight(cy4);
});

cy4.on('mouseover', 'edge', function(e){
  var sel = e.target;
  sel.addClass('highlight');
});
cy4.on('mouseout', 'edge', function(e){
  var sel = e.target;
  sel.removeClass('highlight');
});

var cytoEventHandler = async function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph4-cy') {
    cy4.resize();
    cy4.fit();
    layoutanimation(1, cy4);
  }
  else if (event.fragment.id == 'graph42-cy') {
    layoutanimationcircle(cy4)
  // }
  // else if (event.fragment.id == 'graph43-cy') {
    for(let i = 0; i < cy4.edges().length; i++){
      cy4.edges()[i].animate({
        css: {
          'opacity': 0.8
          }
        },{
        duration: 200
        }
      );
    }
  }
  else if (event.fragment.id == 'graph44-cy') {
    cy4.edges()[0].animate({
      css: {
        'lineColor': "blue"
        }
      },{
      duration: 200
      }
    );
    for(let i = 1; i < cy4.edges().length; i++){
      cy4.edges()[i].animate({
        css: {
          'opacity': 0.2
          }
        },{
        duration: 200
        }
      );
    }
  }
}

Reveal.addEventListener('fragmentshown', cytoEventHandler);

var cytoEventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph4-cy') {
    cy4.resize();
    cy4.fit();
    layoutanimation(1, cy4);
  }
  else if (event.fragment.id == "graph42-cy") {
    layoutanimation(1, cy4);
  // }
  // else if (event.fragment.id == 'graph43-cy') {
    for(let i = 0; i < cy4.edges().length; i++){
      cy4.edges()[i].animate({
        css: {
          'opacity': 0
          }
        },{
        duration: 0
        }
      );
    }
  }
  else if (event.fragment.id == 'graph44-cy') {
    cy4.edges()[0].animate({
      css: {
        'lineColor': "black"
        }
      },{
      duration: 0
      }
    );
    for(let i = 1; i < cy4.edges().length; i++){
      cy4.edges()[i].animate({
        css: {
          'opacity': 1
          }
        },{
        duration: 0
        }
      );
    }
  }
}

var initcy4 = function() {
  for(let i = 0; i < 8; i++) {
    cy4.nodes('[id = "'+ i +'"]').style('border-color', 'black');
    cy4.nodes('[id = "'+ i +'"]').style('background-color', 'blue');
    cy4.nodes('[id = "'+ i +'"]').style('color', 'white');
  }
  for(let i = 8; i < 12; i++) {
    cy4.nodes('[id = "'+ i +'"]').style('color', 'black');
    cy4.nodes('[id = "'+ i +'"]').style('border-color', 'black');
    cy4.nodes('[id = "'+ i +'"]').style('background-color', 'red');
  }

  for(let i = 0; i < 11; i++) {
    for(let j = i+1; j < 12; j++) {
      cy4.add([
        { group: "edges", data: { id: 100+(10*i+j), source: i, target: j}}
      ]);
    }
  }
}

initcy4()

Reveal.addEventListener('fragmenthidden', cytoEventHandlerBack);
