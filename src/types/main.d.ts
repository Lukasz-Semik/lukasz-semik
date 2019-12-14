interface ContainerProps<T> {
  render: (props: T) => React.ReactElement;
}

interface WithRenderChildrenProps<T> {
  children: (props: T) => React.ReactNode | React.RreactNode[];
}

interface Action<T> {
  type: string;
  payload: T;
}
