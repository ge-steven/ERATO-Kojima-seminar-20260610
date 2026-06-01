let cy6 = cytoscape({
  container: document.getElementById('graph6-cy'),
  elements: data6.elements,
  style: [
    {
      selector: 'node',
      style: {
        'text-wrap':'wrap',
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'center',
        'shape': 'data(shape)',
        'width': 'data(count)',
        'font-family': "Helvetica,Arial,sans-serif",
        'background-color': 'data(backgroundColor1)',
        'border-width': 4,
        'border-color': 'data(bordercolor)',
        'height': 40,
        'color': "data(color)",
        "font-size": 30
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

cy6.on('mouseover', 'node', function(e){
  var sel = e.target;
  highlight(sel, cy6);
});
cy6.on('mouseout', 'node', function(e){
  dehighlight(cy6);
});

cy6.on('mouseover', 'edge', function(e){
  var sel = e.target;
  sel.addClass('highlight');
});
cy6.on('mouseout', 'edge', function(e){
  var sel = e.target;
  sel.removeClass('highlight');
});

var cytoEventHandler = async function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph6-cy') {
    cy6.resize();
    cy6.fit();
    layoutanimation(1, cy6);
  }
  else if (event.fragment.id == 'graph62-cy') {
    for(let i = 6; i < 9; i++){
      cy6.nodes()[i].animate({
        css: {
          'opacity': 1
          }
        },{
        duration: 200
        }
      );
      cy6.nodes()[i+18].animate({
        css: {
          'opacity': 1
          }
        },{
        duration: 200
        }
      );
      await sleep(100);
    }
  }
  else if (event.fragment.id == 'graph63-cy') {
    for(let i = 9; i < 12; i++){
      cy6.nodes()[i].animate({
        css: {
          'opacity': 1
          }
        },{
        duration: 200
        }
      );
      cy6.nodes()[i+18].animate({
        css: {
          'opacity': 1
          }
        },{
        duration: 200
        }
      );
      await sleep(100);
    }
  }
  else if (event.fragment.id == 'graph64-cy') {
    for(let i = 12; i < 15; i++){
      cy6.nodes()[i+18].animate({
        css: {
          'opacity': 1
          }
        },{
        duration: 200
        }
      );
      for(let j = 0; j < 3; j++) {
        cy6.nodes()[12+(3*(i-12))+j].animate({
          css: {
            'opacity': 1
            }
          },{
          duration: 200
          }
        );
        await sleep(100);
      }
    }
  }
  else if (event.fragment.id == 'graph65-cy') {
    cy6.nodes()[21].animate({
      css: {
        'opacity': 1
        }
      },{
      duration: 200
      }
    );
  }
  else if (event.fragment.id == 'graph66-cy') {
    cy6.nodes()[22].animate({
      css: {
        'opacity': 1
        }
      },{
      duration: 200
      }
    );
  }
  else if (event.fragment.id == 'graph67-cy') {
    cy6.nodes()[23].animate({
      css: {
        'opacity': 1
        }
      },{
      duration: 200
      }
    );
  }
  else if (event.fragment.id == 'graph68-cy') {
    for(let i = 27; i < 33; i++) {
      cy6.nodes()[i].animate({
        css: {
          'opacity': 0
          }
        },{
        duration: 200
        }
      );
    }
    layoutanimation(3,cy6);
    for(let i = 33; i < 33+33; i++) {
      cy6.nodes('[id = "'+ i +'"]').style('opacity', '1');
    }
    Reveal.nextFragment();
  }
  else if (event.fragment.id == 'graph69-cy') {
    layoutanimationbyids(2,cy6,['33','34','35','36','37','38', '63', '65'])
  }
  else if (event.fragment.id == 'graph610-cy') {
    layoutanimationbyids(2,cy6,['39','41','42','44'])
  }
  else if (event.fragment.id == 'graph611-cy') {
    layoutanimationbyids(2,cy6,['48','49','50','40', '43'])
  }
  else if (event.fragment.id == 'graph612-cy') {
    layoutanimationbyids(2,cy6,['45','46','47','51', '52', '53', '54'])
  }
  else if (event.fragment.id == 'graph613-cy') {
    layoutanimationbyids(2,cy6,['55','56'])
  }
}









Reveal.addEventListener('fragmentshown', cytoEventHandler);

var cytoEventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'graph6-cy') {
    cy6.resize();
    cy6.fit();
    layoutanimation(1, cy6);
  }
  else if (event.fragment.id == 'graph62-cy') {
    for(let i = 6; i < 9; i++){
      cy6.nodes()[i].animate({
        css: {
          'opacity': 0
          }
        },{
        duration: 100
        }
      );
      cy6.nodes()[i+18].animate({
        css: {
          'opacity': 0
          }
        },{
        duration: 100
        }
      );
    }
  }
  else if (event.fragment.id == 'graph63-cy') {
    for(let i = 9; i < 12; i++){
      cy6.nodes()[i].animate({
        css: {
          'opacity': 0
          }
        },{
        duration: 100
        }
      );
      cy6.nodes()[i+18].animate({
        css: {
          'opacity': 0
          }
        },{
        duration: 100
        }
      );
    }
  }
  else if (event.fragment.id == 'graph64-cy') {
    for(let i = 12; i < 15; i++){
      cy6.nodes()[i+18].animate({
        css: {
          'opacity': 0
          }
        },{
        duration: 100
        }
      );
      for(let j = 0; j < 3; j++) {
        cy6.nodes()[12+(3*(i-12))+j].animate({
          css: {
            'opacity': 0
            }
          },{
          duration: 100
          }
        );
      }
    }
  }
  else if (event.fragment.id == 'graph65-cy') {
    cy6.nodes()[21].animate({
      css: {
        'opacity': 0
        }
      },{
      duration: 100
      }
    );
  }
  else if (event.fragment.id == 'graph66-cy') {
    cy6.nodes()[22].animate({
      css: {
        'opacity': 0
        }
      },{
      duration: 100
      }
    );
  }
  else if (event.fragment.id == 'graph67-cy') {
    cy6.nodes()[23].animate({
      css: {
        'opacity': 0
        }
      },{
      duration: 100
      }
    );
  }
  else if (event.fragment.id == 'graph68-cy') {
    for(let i = 27; i < 33; i++) {
      cy6.nodes()[i].animate({
        css: {
          'opacity': 1
          }
        },{
        duration: 100
        }
      );
    }
    layoutanimation(1,cy6)
    for(let i = 33; i < 33+33; i++) {
      cy6.nodes('[id = "'+ i +'"]').style('opacity', '0');
    }
  }
  else if (event.fragment.id == 'graph69-cy') {
    layoutanimationbyids(3,cy6,['33','34','35','36','37','38', '63', '65'])
  }
  else if (event.fragment.id == 'graph610-cy') {
    layoutanimationbyids(3,cy6,['39','41','42','44'])
  }
  else if (event.fragment.id == 'graph611-cy') {
    layoutanimationbyids(3,cy6,['48','49','50','40', '43'])
  }
  else if (event.fragment.id == 'graph612-cy') {
    layoutanimationbyids(3,cy6,['45','46','47','51', '52', '53', '54'])
  }
  else if (event.fragment.id == 'graph613-cy') {
    layoutanimationbyids(3,cy6,['55','56'])
  }
}

var initcy6 = function() {
  for(let i = 6; i < 33+33; i++) {
    cy6.nodes('[id = "'+ i +'"]').style('opacity', '0');
  }
}

initcy6()

Reveal.addEventListener('fragmenthidden', cytoEventHandlerBack);
