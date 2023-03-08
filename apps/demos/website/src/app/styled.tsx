// import React from 'react';
// import type {
//   ClassValue,
//   TV,
//   TVCompoundVariants,
//   TVDefaultVariants,
//   TVProps,
//   TVReturnType,
//   TVSlots,
//   TVVariants,
// } from 'tailwind-variants';
// import { tv } from 'tailwind-variants';

// type TVConfig = Parameters<TV>[1];

// export function styled<
//   C extends TVConfig,
//   V extends TVVariants<S, B, EV> = undefined,
//   CV extends TVCompoundVariants<V, EV, S, B> = undefined,
//   DV extends TVDefaultVariants<V, EV, S> = undefined,
//   B extends ClassValue = undefined,
//   S extends TVSlots = undefined,
//   E extends ReturnType<TV>,
//   EV extends TVVariants = E['variants'] extends TVVariants
//     ? E['variants']
//     : undefined,
//   ES extends TVSlots = E['slots'] extends TVSlots ? E['slots'] : undefined
// >(
//   options: {
//     extend?: E;
//     base?: B;
//     slots?: S;
//     variants?: V;
//     compoundVariants?: CV;
//     defaultVariants?: DV;
//   },
//   config?: C
// ) {
//   const clx: TVReturnType<V, EV, S, ES, B> = tv(options, config);

//   const Component: React.FC<TVProps<V, EV, S>> = (props) => {
//     return <div className={clx(props)}>{props.children}</div>;
//   };

//   return Component;
// }
