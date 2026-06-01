let cy5 = cytoscape({
  container: document.getElementById('graph5-cy'),
  elements: data5.elements,
  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'center',
        'shape': 'data(shape)',
        'width': 'data(count)',
        'font-family': "Helvetica,Arial,sans-serif",
        'background-color': 'data(backgroundColor1)',
        'border-width': 4,
        'border-color': 'black',
        'height': 40,
        'color': "data(color)"
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

cy5.on('mouseover', 'node', function(e){
  var sel = e.target;
  highlight(sel, cy5);
});
cy5.on('mouseout', 'node', function(e){
  dehighlight(cy5);
});

cy5.on('mouseover', 'edge', function(e){
  var sel = e.target;
  sel.addClass('highlight');
});
cy5.on('mouseout', 'edge', function(e){
  var sel = e.target;
  sel.removeClass('highlight');
});

var cytoEventHandler = async function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph5-cy') {
    cy5.resize();
    cy5.fit();
    layoutanimation(1, cy5);
  }
  else if (event.fragment.id == 'graph52-cy') {
    for(let i = 6; i < 9; i++){
      cy5.nodes()[i].animate({
        css: {
          'opacity': 1
          }
        },{
        duration: 200
        }
      );
    }
  }
  else if (event.fragment.id == 'graph53-cy') {
    for(let i = 9; i < 11; i++){
      cy5.nodes()[i].animate({
        css: {
          'opacity': 1
          }
        },{
        duration: 200
        }
      );
    }
  }
  else if (event.fragment.id == 'graph54-cy') {
    for(let i = 11; i < 20; i++){
      cy5.nodes()[i].animate({
        css: {
          'opacity': 1
          }
        },{
        duration: 200
        }
      );
    }
  }
  else if (event.fragment.id == 'graph55-cy') {
    cy5.nodes()[20].animate({
      css: {
        'opacity': 1
        }
      },{
      duration: 200
      }
    );
  }
  else if (event.fragment.id == 'graph56-cy') {
    layoutanimation(2,cy5)
  }
}

Reveal.addEventListener('fragmentshown', cytoEventHandler);

var cytoEventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph5-cy') {
    cy5.resize();
    cy5.fit();
    layoutanimation(1, cy5);
  }
  else if (event.fragment.id == 'graph52-cy') {
    for(let i = 6; i < 9; i++){
      cy5.nodes()[i].animate({
        css: {
          'opacity': 0
          }
        },{
        duration: 100
        }
      );
    }
  }
  else if (event.fragment.id == 'graph53-cy') {
    for(let i = 9; i < 11; i++){
      cy5.nodes()[i].animate({
        css: {
          'opacity': 0
          }
        },{
        duration: 100
        }
      );
    }
  }
  else if (event.fragment.id == 'graph54-cy') {
    for(let i = 11; i < 20; i++){
      cy5.nodes()[i].animate({
        css: {
          'opacity': 0
          }
        },{
        duration: 100
        }
      );
    }
  }
  else if (event.fragment.id == 'graph55-cy') {
    cy5.nodes()[20].animate({
      css: {
        'opacity': 0
        }
      },{
      duration: 100
      }
    );
  }
  else if (event.fragment.id == 'graph56-cy') {
    layoutanimation(1,cy5)
  }
}

var initcy5 = function() {
  for(let i = 6; i < 21; i++) {
    cy5.nodes('[id = "'+ i +'"]').style('opacity', '0');
  }
}

initcy5()

Reveal.addEventListener('fragmenthidden', cytoEventHandlerBack);
