import preact from 'preact';

export default function(obj) {
  function preactComponent() {
    preact.Component.apply(this, arguments);

    // auto-bind methods to the component
    for (let i in obj) {
      if (i !== 'render' && typeof obj[i] === 'function') {
        this[i] = obj[i].bind(this);
      }
    }

    if (obj.init) {
      obj.init.call(this);
    }
  }

  preactComponent.prototype = Object.assign(
    Object.create(preact.Component.prototype), obj
  );

  preactComponent.prototype.constructor = preactComponent;

  return preactComponent;
}
