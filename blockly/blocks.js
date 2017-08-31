Blockly.Blocks['gmaps_new'] = {
  init: function () {
    this.appendValueInput("center_")
      .setCheck(null)
      .appendField(Blockly.Msg.GMAPS_CENTER);
    this.appendValueInput("zoom_")
      .setCheck(null)
      .appendField(Blockly.Msg.GMAPS_ZOOM);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['gmaps_height'] = {
  init: function () {
    this.appendValueInput("height_")
      .setCheck(null)
      .appendField(new Blockly.FieldVariable("map"), "map_")
      .appendField(Blockly.Msg.GMAPS_HEIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['gmaps_width'] = {
  init: function () {
    this.appendValueInput("width_")
      .setCheck(null)
      .appendField(new Blockly.FieldVariable("map"), "map_")
      .appendField(Blockly.Msg.GMAPS_WIDTH);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['gmaps_zoom'] = {
  init: function () {
    this.appendValueInput("zoom_")
      .setCheck(null)
      .appendField(new Blockly.FieldVariable("map"), "map_")
      .appendField(Blockly.Msg.GMAPS_ZOOM);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['gmaps_panto'] = {
  init: function () {
    this.appendValueInput("location_")
      .setCheck(null)
      .appendField(new Blockly.FieldVariable("map"), "map_")
      .appendField(Blockly.Msg.GMAPS_PANTO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['gmaps_getcenter'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("map"), "map_")
      .appendField(Blockly.Msg.GMAPS_GET_CENTER);
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['location_latlng'] = {
  init: function () {
    this.appendValueInput("lat_")
      .setCheck(null)
      .appendField(Blockly.Msg.GMAPS_LATITUDE);
    this.appendValueInput("lng_")
      .setCheck(null)
      .appendField(Blockly.Msg.GMAPS_LONGITUDE);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['location_address'] = {
  init: function () {
    this.appendValueInput("address_")
      .setCheck(null)
      .appendField(Blockly.Msg.GMAPS_ADDRESS);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['location_current'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GMAPS_CURRENT);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['marker_new'] = {
  init: function () {
    this.appendValueInput("map_")
      .setCheck(null)
      .appendField(Blockly.Msg.GMAPS_MAP);
    this.appendValueInput("location_")
      .setCheck(null)
      .appendField(Blockly.Msg.GMAPS_LOCATION);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['marker_setinfo'] = {
  init: function () {
    this.appendValueInput("info_")
      .setCheck(null)
      .appendField(new Blockly.FieldVariable("marker"), "marker_")
      .appendField(Blockly.Msg.GMAPS_SET_INFO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['marker_setinfoAndShow'] = {
  init: function () {
    this.appendValueInput("info_")
      .setCheck(null)
      .appendField(new Blockly.FieldVariable("marker"), "marker_")
      .appendField(Blockly.Msg.GMAPS_OPEN_INFO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['marker_setlocation'] = {
  init: function () {
    this.appendValueInput("location_")
      .setCheck(null)
      .appendField(new Blockly.FieldVariable("marker"), "marker_")
      .appendField(Blockly.Msg.GMAPS_SET_LOCATION);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['marker_showinfo'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("marker"), "marker_")
      .appendField(Blockly.Msg.GMAPS_OPEN_INFO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['marker_hideinfo'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("marker"), "marker_")
      .appendField(Blockly.Msg.GMAPS_HIDE_INFO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['marker_getposition'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("marker"), "marker_")
      .appendField(Blockly.Msg.GMAPS_GET_LOCATION);
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
