Blockly.JavaScript['gmaps_new'] = function (block) {
  var value_center_ = Blockly.JavaScript.valueToCode(block, 'center_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_zoom_ = Blockly.JavaScript.valueToCode(block, 'zoom_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'createMap({center: ' + value_center_ + ', zoom: ' + value_zoom_ + '})';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['gmaps_height'] = function (block) {
  var variable_map_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('map_'), Blockly.Variables.NAME_TYPE);
  var value_height_ = Blockly.JavaScript.valueToCode(block, 'height_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '$(' + variable_map_ + '.getDiv()).height(' + value_height_ + ');\n';
  return code;
};

Blockly.JavaScript['gmaps_width'] = function (block) {
  var variable_map_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('map_'), Blockly.Variables.NAME_TYPE);
  var value_width_ = Blockly.JavaScript.valueToCode(block, 'width_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '$(' + variable_map_ + '.getDiv()).width(' + value_width_ + ');\n';
  return code;
};

Blockly.JavaScript['gmaps_zoom'] = function (block) {
  var variable_map_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('map_'), Blockly.Variables.NAME_TYPE);
  var value_zoom_ = Blockly.JavaScript.valueToCode(block, 'zoom_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_map_ + '.setZoom(parseInt(' + value_zoom_ + '));\n';
  return code;
};

Blockly.JavaScript['gmaps_panto'] = function (block) {
  var variable_map_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('map_'), Blockly.Variables.NAME_TYPE);
  var value_location_ = Blockly.JavaScript.valueToCode(block, 'location_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_map_ + '.panTo(' + value_location_ + ');\n';
  return code;
};

Blockly.JavaScript['gmaps_getcenter'] = function (block) {
  var variable_map_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('map_'), Blockly.Variables.NAME_TYPE);
  var code = variable_map_ + '.getCenter()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['location_latlng'] = function (block) {
  var value_lat_ = Blockly.JavaScript.valueToCode(block, 'lat_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lng_ = Blockly.JavaScript.valueToCode(block, 'lng_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '{lat: ' + value_lat_ + ', lng: ' + value_lng_ + '}';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['location_address'] = function (block) {
  var value_address_ = Blockly.JavaScript.valueToCode(block, 'address_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'await geocode(' + value_address_ + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['marker_new'] = function (block) {
  var value_map_ = Blockly.JavaScript.valueToCode(block, 'map_', Blockly.JavaScript.ORDER_ATOMIC);
  var value_location_ = Blockly.JavaScript.valueToCode(block, 'location_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'createMarker(' + value_map_ + ', ' + value_location_ + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['marker_setinfo'] = function (block) {
  var variable_marker_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('marker_'), Blockly.Variables.NAME_TYPE);
  var value_info_ = Blockly.JavaScript.valueToCode(block, 'info_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_marker_ + '.infoContent = ' + value_info_ + ';\n';
  return code;
};

Blockly.JavaScript['marker_setlocation'] = function (block) {
  var variable_marker_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('marker_'), Blockly.Variables.NAME_TYPE);
  var value_location_ = Blockly.JavaScript.valueToCode(block, 'location_', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_marker_ + '.setPosition(' + value_location_ + ');\n';
  return code;
};

Blockly.JavaScript['marker_showinfo'] = function (block) {
  var variable_marker_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('marker_'), Blockly.Variables.NAME_TYPE);
  var code = 'showInfo(' + variable_marker_ + ');\n';
  return code;
};

Blockly.JavaScript['marker_hideinfo'] = function (block) {
  var variable_marker_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('marker_'), Blockly.Variables.NAME_TYPE);
  var code = 'hideInfo(' + variable_marker_ + ');\n';
  return code;
};

Blockly.JavaScript['marker_getposition'] = function (block) {
  var variable_marker_ = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('marker_'), Blockly.Variables.NAME_TYPE);
  var code = variable_marker_ + '.getPosition()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
