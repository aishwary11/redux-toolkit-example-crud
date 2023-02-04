import axios from "axios";

const autoInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});

class TutorialDataService {
  getAll() {
    return autoInstance.get("/tutorials");
  }

  get(id) {
    return autoInstance.get(`/tutorials/${id}`);
  }

  create(data) {
    return autoInstance.post("/tutorials", data);
  }

  update(id, data) {
    return autoInstance.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return autoInstance.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return autoInstance.delete(`/tutorials`);
  }

  findByTitle(title) {
    return autoInstance.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();