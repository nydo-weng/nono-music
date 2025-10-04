// 函数签名, 接受一个 string 一个 number 作为参数返回 string 的函数类型
interface IFnCall {
  (name: string, age: number): string;
}

const foo: IFnCall = function (name, age) {
  return 'abc';
};

foo('thisname', 18);

// 函数签名, 接受一个 函数, 这个函数不接受参数, 返回 string, 加 一个 number 作为参数, 返回 string 的函数类型
interface IFnCall2 {
  (fn: () => string, age: number): string;
}

const foo2: IFnCall2 = function (fn, age) {
  return 'aaa';
};

foo2(() => 'abc', 18);

//
interface IFnCall3 {
  <TWhy>(fn: () => TWhy, age: number): string;
}
const foo3: IFnCall3 = function (fn, age) {
  return 'fo3';
};
//   vv            vv   这里前面的泛型, 决定参数中的函数的返回类型
foo3<number>(() => 28, 18);
// 如果不传入, 就会类型推断, 可以根据返回值推断
foo3(() => 18, 18); // 比如这里不写, 就会根据传入的第一个参数函数的返回值类型, 推断泛型, 如果函数签名的返回类型, 也是该泛型, 看 42 行, 会报错

interface IFnCall4 {
  <TWhy>(fn: () => TWhy, age: number): TWhy;
}
const foo4: IFnCall4 = function (fn, age) {
  return fn(); // 返回值的类型是 fn 的返回值类型, 所以直接返回 fn() 宝宝错
};
const thisString = foo4(() => 'fsd', 53); // 基于第一个参数中函数的返回类型, 确定这个函数的返回类型是string
const thisNumber = foo4(() => 18, 23); // 基于第一个参数中函数的返回类型, 确定这个函数的返回类型是number
foo4(() => 18, 200);

interface TypedUseSelectorHook<TState> {
  <TSelected>(
    selector: (state: TState) => TSelected,
    equalityFn?: EqualityFn<NoInfer<TSelected>>,
  ): TSelected;
  <Selected = unknown>(
    selector: (state: TState) => Selected,
    options?: UseSelectorOptions<Selected>,
  ): Selected;
}

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
// 把 useSelector 提升到了
// <TSelected>(selector: (state: TState) => TSelected, equalityFn?: EqualityFn<NoInfer<TSelected>>,): TSelected;
// 可以理解为
// useAppSelector = <TSelected>(selector: (state: TState) => TSelected, equalityFn?: EqualityFn<NoInfer<TSelected>>,): TSelected; 吗?
// 然后调用的时候, 需要两个参数,
// 第一个参数是一个函数, 参数是 类型为 TState 的 state, 返回值是泛型 TSelected, 当不给定泛型的具体类型时, 泛型由调用该函数时的这个参数函数的返回值确定泛型类型
// 第二个参数可选的 shallowEqual
// 返回值的类型是前面根据参数函数的返回值类型决定的泛型
// 所以如果传入的函数是 (state) => ( {a: state.b}), 算了我有点解释不下去了, 帮我看一下对错, 然后详细解释, 更清楚一点

const { count, message } = useAppSelector(
  (state) => ({
    count: state.counter.count,
    message: state.counter.message,
  }),
  shallowEqualApp,
);
