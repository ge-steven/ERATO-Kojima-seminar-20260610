let cy1_mrp = cytoscape({
  container: document.getElementById('graph1-mrp'),
  elements: data_mrp.elements,
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
    positions: function(node){return node._private.data.position1}
  }
});

cy1_mrp.on('mouseover', 'node', function(e){
  var sel = e.target;
  highlight(sel, cy1_mrp);
});
cy1_mrp.on('mouseout', 'node', function(e){
  dehighlight(cy1_mrp);
});

cy1_mrp.on('mouseover', 'edge', function(e){
  var sel = e.target;
  sel.addClass('highlight');
});
cy1_mrp.on('mouseout', 'edge', function(e){
  var sel = e.target;
  sel.removeClass('highlight');
});

var cytoEventHandler = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph1-mrp') {
    cy1_mrp.resize();
    cy1_mrp.fit();
    layoutanimation(1, cy1_mrp);
  }
  else if (event.fragment.id == 'graph1-mrp-1') {
    layoutanimation(2, cy1_mrp)
    .pon('layoutstop')
    .then(async function(event) {
      await sleep(200);
      layoutanimation(3, cy1_mrp)
      .pon('layoutstop')
      .then( async function(event) {
        await sleep(200);
        layoutanimation(4, cy1_mrp)
        .pon('layoutstop')
        .then(async function(event) {
          await sleep(200);
          layoutanimation(5, cy1_mrp)})
      })
    });
  }
  else if (event.fragment.id == 'graph1-mrp-2') {
    highlight(cy1_mrp.elements()[0], cy1_mrp);
  }
  else if (event.fragment.id == 'graph1-mrp-3') {
    layoutanimation(6, cy1_mrp)
    cy1_mrp.resize();
    cy1_mrp.fit();
  }
}

Reveal.addEventListener('fragmentshown', cytoEventHandler);

var cytoEventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph1-mrp') {
    cy1_mrp.resize();
    cy1_mrp.fit();
    layoutanimation(1, cy1_mrp);
  }
  else if (event.fragment.id == 'graph1-mrp-1') {
    layoutanimation(1, cy1_mrp)
  }
  else if (event.fragment.id == 'graph1-mrp-2') {
    dehighlight(cy1_mrp);
  }
  else if (event.fragment.id == 'graph1-mrp-3') {
    layoutanimation(5, cy1_mrp)
    cy1_mrp.resize();
    cy1_mrp.fit();
  }
}


Reveal.addEventListener('fragmenthidden', cytoEventHandlerBack);
