interface ContainerProps<T> {
  render: (props: T) => React.ReactElement;
}

interface WithRenderChildrenProps<T> {
  children: (props: T) => React.ReactNode | React.RreactNode[];
}

type ValueOf<T> = T[keyof T];
