const Api = {
  host: 'http://localhost:3005',
  auth: {
    signIn: `/api/auth/signIn`,
    signUp: `/api/auth/signUp`,
  },
  tasks: {
    getTasks: '/api/tasks'
  }
};

export default Api;
