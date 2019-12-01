interface ContainerProps<T> {
  render: (props: T) => React.ReactElement;
}

interface Action {
  type: string;
  payload: any;
}
