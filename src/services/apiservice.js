
import api from '../services/api'
import axios from "axios";

export function setToken(token) {
    localStorage.setItem("token", token);
}

export async function linkAgentToProperty(ids) {
  try {
    const response = await api.put("inventory/agentadd",ids);
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Add property error:", error);
    throw error;
  }
}

export async function linkClientToProperty(ids) {
  try {
    const response = await api.put("inventory/clientadd",ids);
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Add property error:", error);
    throw error;
  }
}

export async function linkAgentToClient(ids) {
  try {
    const response = await api.put("client/agentadd",ids);
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Add property error:", error);
    throw error;
  }
}

export async function postImages(imageData) {
    try {
        const response = await api.post("images", imageData);
        console.log('image uploaded to server');
        return response.data;
        
      } catch (error) {
        // Handle errors here
        console.error("Add client error:", error);
        throw error;
      }
    }


export function login(emails, passwords) {
    const postData = {
        emails,
        passwords
    };
    return api.post(`auth/login`,postData);
}

export async function addClient(formData) {
    try {
      const response = await api.post("client/", formData);
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Add client error:", error);
      throw error;
    }
  }

export async function getClient() {
    try {
      const response = await api.get("client/");
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Add client error:", error);
      throw error;
    }
  }
export async function getClientById(id) {
    try {
      const response = await api.get(`client/get/${id}`);
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Add client error:", error);
      throw error;
    }
  }

  export async function searchClient(searchTerm) {
    try {
      const response = await api.get(`client/search/?search=${searchTerm}`);
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("search agent error:", error);
      throw error;
    }
  }

 


  export async function addAgent(formData) {
    try {
      const response = await api.post("agent/", formData);
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Add agent error:", error);
      throw error;
    }
  }

export async function getAgent() {
    try {
      const response = await api.get("agent/");
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Add agent error:", error);
      throw error;
    }
  }

  export async function getAgenttById(id) {
    try {
      const response = await api.get(`agent/get/${id}`);
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Add client error:", error);
      throw error;
    }
  }

export async function searchtAgent(searchTerm) {
    try {
      const response = await api.get(`agent/search/?search=${searchTerm}`);
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("search agent error:", error);
      throw error;
    }
  }

  
  export async function addProperty(formData) {
    try {
      const response = await api.post("inventory/", formData);
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Add property error:", error);
      throw error;
    }
  }

export async function getProperty() {
    try {
      const response = await api.get("inventory/");
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Add property error:", error);
      throw error;
    }
  }



export async function getAgentproperty(id) {
    console.log(id)
    try {
      const response = await api.get(`inventory/agents/${id}`,);
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Add property error:", error);
      throw error;
    }
  }

export async function getClientproperty(id) {
    console.log(id)
    try {
      const response = await api.get(`inventory/client/${id}`,);
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Add property error:", error);
      throw error;
    }
  }

  export async function searchProperty(searchTerm) {
    try {
      const response = await api.get(`inventory/search/?search=${searchTerm}`);
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("search agent error:", error);
      throw error;
    }
  }

  export async function addCompany(formData) {
    try {
      const response = await api.post("company/", formData);
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Add Company error:", error);
      throw error;
    }
  }

export async function getCompany() {
    try {
      const response = await api.get("company/");
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Add Company error:", error);
      throw error;
    }
  }


export async function getPipeline(id) {
    try {
      const response = await api.get(`pipeline/${id}`);
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Add Company error:", error);
      throw error;
    }
  }

export async function changePipeline(past,present, pipelineId, clientId) {
  // console.log(past,present, pipelineId, clientId)
  const body = {past,present, pipelineId, clientId}
    try {
      const response = await api.put(`pipeline/change`,body);
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Add Company error:", error);
      throw error;
    }
  }


