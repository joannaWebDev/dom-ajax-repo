const reposPulls =
  "https://api.github.com/repos/codeyourfuture/js-exercises/pulls";

const fetchRepos = async () => {
  const response = await fetch(reposPulls);
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
      $("#pull-requests-list").append(
        `<li><a href=${repo.html_url}>${repo.title}</a></li>`
      );
    });
    //used postman to see this id
    const user = "FatimaAbdimalik";
    const filterData = repos.filter(repo => repo.user.login == user);
    console.log(filterData);
  })
  .catch(error => {
    console.log(error);
  });
