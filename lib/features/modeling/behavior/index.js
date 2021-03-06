module.exports = {
  __init__: [
    'appendBehavior',
    'createBoundaryEventBehavior',
    'createDataObjectBehavior',
    'createOnFlowBehavior',
    'createParticipantBehavior',
    'dataInputAssociationBehavior',
    'deleteLaneBehavior',
    'labelBehavior',
    'modelingFeedback',
    'removeParticipantBehavior',
    'replaceConnectionBehavior',
    'replaceElementBehaviour',
    'resizeLaneBehavior',
    'unsetDefaultFlowBehavior',
    'updateFlowNodeRefsBehavior'
  ],
  appendBehavior: [ 'type', require('./AppendBehavior') ],
  createBoundaryEventBehavior: [ 'type', require('./CreateBoundaryEventBehavior') ],
  createDataObjectBehavior: [ 'type', require('./CreateDataObjectBehavior') ],
  createOnFlowBehavior: [ 'type', require('./CreateOnFlowBehavior') ],
  createParticipantBehavior: [ 'type', require('./CreateParticipantBehavior') ],
  dataInputAssociationBehavior: [ 'type', require('./DataInputAssociationBehavior') ],
  deleteLaneBehavior: [ 'type', require('./DeleteLaneBehavior') ],
  labelBehavior: [ 'type', require('./LabelBehavior') ],
  modelingFeedback: [ 'type', require('./ModelingFeedback') ],
  removeParticipantBehavior: [ 'type', require('./RemoveParticipantBehavior') ],
  replaceConnectionBehavior: [ 'type', require('./ReplaceConnectionBehavior') ],
  replaceElementBehaviour: [ 'type', require('./ReplaceElementBehaviour') ],
  resizeLaneBehavior: [ 'type', require('./ResizeLaneBehavior') ],
  unsetDefaultFlowBehavior: [ 'type', require('./UnsetDefaultFlowBehavior') ],
  updateFlowNodeRefsBehavior: [ 'type', require('./UpdateFlowNodeRefsBehavior') ]
};
