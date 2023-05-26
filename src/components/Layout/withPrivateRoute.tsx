import PrivateRoute from '../common/PrivateRoute';

const withPrivateRoute = (WrappedComponent: any) => {
  const getLayout = WrappedComponent.getLayout ?? ((page: any) => page);
  const ComponentWithPrivateRoute = (props: any) => (
    <PrivateRoute>{getLayout(<WrappedComponent {...props} />)}</PrivateRoute>
  );

  return ComponentWithPrivateRoute;
};

export default withPrivateRoute;
