// Write code here to communicate with Github
// GET request for list of repositories
// More info on how this API is constructed in https://developer.github.com/v3/repos/#list-repositories-for-a-user

const getReposUrl = "https://api.github.com/users/joannaWebDev/repos";

const fetchRepos = async () => {
  const response = await fetch(getReposUrl);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  } else {
    const repos = await response.json(); //always put .json
    return repos;
  }
};

fetchRepos()
  .then(repos => {
    console.log(repos);
    repos.forEach(repo => {
      $("#repos-list").append(
        `<li><a href=${repo.html_url}>${repo.name}</a></li>`
      );
    });
    $("#repos-count").html(`${repos.length}`);
  })
  .catch(error => {
    console.log(error);
  });
