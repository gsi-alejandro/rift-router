import React, { useContext } from 'react';
import { IRouter, RiftContext } from './RiftProvider';

export const RiftGate = () => {
  const router = useContext<IRouter>(RiftContext);
  const index = router.register();
  if (!router.active) {
    console.error(`RiftGate nested level: ${index} have no active component`);
    return null;
  }
  const component = router.active.components[index];
  if (!component) {
    console.error(
      `RiftGate nested level: ${index} not will render component. Please check your routes`
    );
    return null;
  }
  return (
    <React.Fragment>
      {typeof component === 'function' ? component({ router }) : component}
    </React.Fragment>
  );
};
