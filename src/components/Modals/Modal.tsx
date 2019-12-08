import React, { Component } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

class Modal extends Component<Props> {
  el: HTMLElement;

  constructor(props: Props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const modalRoot = document.getElementById('modal-root');

    if (modalRoot) {
      modalRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    const modalRoot = document.getElementById('modal-root');

    if (modalRoot) {
      modalRoot.removeChild(this.el);
    }
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
