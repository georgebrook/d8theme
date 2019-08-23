// THIS PLUGIN TURNS NORMAL CHECKBOXES IN THE STANDARD LEAFLET LAYER CHOOSER
// INTO STYLED ONES THAT MATCH THE COLOUR CODING OF FEATURES

(function(L) {

  'use strict'

  if (typeof L === 'undefined') {
    throw new Error('Leaflet must be included first')
  }

  // PLUGIN TO STYLE LEAFLET CONTROL LAYERS CHECKBOXES

  L.Control.Layers.Legendary = L.Control.Layers.extend({

    _addItem: function (obj) {

      var checked = this._map.hasLayer(obj.layer)
      var input

      if (obj.overlay) {
        input = document.createElement('input')
        input.type = 'checkbox'
        input.className = 'leaflet-control-layers-selector'
        input.defaultChecked = checked
      } else {
        input = this._createRadioElement('leaflet-base-layers', checked)
      }

      this._layerControlInputs.push(input)
      input.layerId = L.Util.stamp(obj.layer)

      L.DomEvent.on(input, 'click', this._onInputClick, this)

      var label = document.createElement('label')

      var name = document.createElement('span')
      name.innerHTML = ' ' + obj.name

      var holder = document.createElement('div')

      holder.appendChild(input)
      holder.appendChild(label)
      holder.appendChild(name)

      var container = obj.overlay ? this._overlaysList : this._baseLayersList
      container.appendChild(holder)

      this._checkDisabledLayers()
      return label
    }

  })

  L.control.layers.legendary = function(base, overlays, options) {
    return new L.Control.Layers.Legendary(base, overlays, options)
  }

})(window.L)
