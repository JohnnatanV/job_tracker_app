const API_URL = "https://your-api-url-com";

export const getJobs = async () => {
  try {
    const response = await fetch(`${API_URL}/jobs`);
    if (!response.ok) {
      throw new Error("Error al obtener los trabajos");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addJob = async (jobData) => {
  try {
    const response = await fetch(`${API_URL}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobData),
    });
    if (!response.ok) {
      throw new Error("Error al agregar el trabajo");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
