import { useEffect, useState } from 'react';
import { addJob } from '../services/jobService';

export default function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      const jobsData = await getJobs();
      setJobs(jobsData);
    }
    fetchJobs();
  }, [])

  const handleAddJob = async (e) => {
    e.preventDefault();
    const jobData = { title: newJob };
    const addedJob = await addJob(jobData);
    if (addedJob) {
      setJobs([...jobs, addedJob]);
      setNewJob('');
    }
  }

  return (<div>
    <h1>Jobs List</h1>
    <form onSubmit={handleAddJob}>
      <input
        type="text"
        value={newJob}
        onchange={(e) => setNewJob(e.target.value)}
        placeholder="Enter job title"
        required
      />
      <button type="submit">Add Job</button>
    </form>
    {jobs.length > 0 ? (
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>{job.title}</li>
        ))}</ul>
    ) : (<p>No jobs available</p>)}
  </div>);
}
