const badRequest = (e: any) => {
  return {
    errors: e.errors.map((err: any) => err.message),
  };
};

export default badRequest;
