interface ContainerProps<T> {
  render: (props: T) => React.ReactElement;
}

interface Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}
