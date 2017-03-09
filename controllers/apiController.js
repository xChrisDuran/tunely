// Controllers to be exported out to other documents as function.
function index(req, res) {
  res.json({
    message: 'Welcome to tunely!',
    documentation_url: 'https://github.com/xChrisDuran/tunely',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  });
}


// exports controllers
module.exports = {index: index}
