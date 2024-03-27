export const ErrorComponent = () => {
  // This logs four times, but it should log only once?
  console.log('test error in component');
  // When debugging this during a test, the debugger wil stop here five times. But we expect that it stops only once?
  throw new Error('test error in component');
  return <p>This is an error test component, which will throw an error</p>;
};
