import React from '~/components/Cards/node_modules/react';

export default function DefaultCard({ children }) {
  return (
    <div className="card card-bordered">
      <div className="card-inner">{children}</div>
    </div>
  );
}
