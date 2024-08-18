import React from 'react';
import { useForm } from 'react-hook-form';
import { createArticle } from '../utils/articleapi'; // Adjust path if necessary

type FormData = {
  title: string;
  authors: string;
  source: string;
  pubyear: string;
  doi: string;
  claim: string;
  evidence: string;
};

export default function SubmissionForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await createArticle(data);
      // Optionally handle success feedback here
      alert('Article submitted successfully!');
      reset(); // Clear the form after successful submission
    } catch (error) {
      console.error('Error submitting article:', error);
      // Optionally handle error feedback here
      alert('Failed to submit article.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title', { required: true })} placeholder="Title" />
      <input {...register('authors', { required: true })} placeholder="Authors" />
      <input {...register('source', { required: true })} placeholder="Source" />
      <input {...register('pubyear', { required: true })} placeholder="Publication Year" />
      <input {...register('doi')} placeholder="DOI" />
      <input {...register('claim')} placeholder="Claim" />
      <input {...register('evidence')} placeholder="Evidence" />
      
      <button type="submit">Submit</button>
    </form>
  );
}
