const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const updateValorantPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#title-update-valorant-post").value.trim();
    const content = document
      .querySelector("#content-update-valorant-post")
      .value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Failed to update a post.");
    }
}
};

const deleteValorantPostFormHandler = async (event) => {
    event.preventDefault();
  
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
        alert("Failed to delete a post.");
    }
};

const updateValorantPostButton = document.querySelector("#update-valorant-post");

if (updateValorantPostButton) {
  updateValorantPostButton.addEventListener("click", updateValorantPostFormHandler);
}

const deleteValorantPostButton = document.querySelector("#delete-valorant-post");

if (deleteValorantPostButton) {
  deleteValorantPostButton.addEventListener("click", deleteValorantPostFormHandler);
}