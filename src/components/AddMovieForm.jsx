import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const styles = {
    outer: {
        display: 'flex',
        height: '100vh',
        fontFamily: 'Poppins',
        backgroundColor: "#1f201f",
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        maxWidth: '500px',
        margin: '2rem auto',
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '24px',
        color: '#333'
    },
    formGroup: {
        marginBottom: '20px'
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '500',
        color: '#555'
    },
    input: {
        width: '100%',
        padding: '10px 12px',
        fontSize: '14px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box'
    },
    select: {
        width: '100%',
        padding: '10px 12px',
        fontSize: '14px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: 'white',
        boxSizing: 'border-box'
    },
    textarea: {
        width: '100%',
        padding: '10px 12px',
        fontSize: '14px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        minHeight: '120px',
        resize: 'vertical',
        boxSizing: 'border-box'
    },
    buttonContainer: {
        display: 'flex',
        gap: '12px',
        marginTop: '24px'
    },
    submitButton: {
        flex: '1',
        padding: '12px',
        backgroundColor: '#0066cc',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight: '500',
        cursor: 'pointer'
    },
    cancelButton: {
        flex: '1',
        padding: '12px',
        backgroundColor: '#f5f5f5',
        color: '#333',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight: '500',
        cursor: 'pointer'
    }
};

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.title || !formData.director || !formData.genre || !formData.releaseYear || !formData.synopsis || !formData.posterUrl){
        console.log('all fields are required')
        setError('all fields are required')
    }
    console.log('Form submitted:', formData);
    // Here you would typically handle the form submission
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div style={styles.outer}>
        <div style={styles.container}>
        <h2 style={styles.title}>Add New Movie</h2>
        
        <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
            <label htmlFor="title" style={styles.label}>
                Title
            </label>
            <p style={{color: 'red'}}>{error}</p>
            <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter movie title"
                required
            />
            </div>

            <div style={styles.formGroup}>
            <label htmlFor="director" style={styles.label}>
                Director
            </label>
            <input
                type="text"
                id="director"
                name="director"
                value={formData.director}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter director name"
                required
            />
            </div>

            <div style={styles.formGroup}>
            <label htmlFor="genre" style={styles.label}>
                Genre
            </label>
            <select
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                style={styles.select}
                required
            >
                <option value="">Select a genre</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="sciFi">Science Fiction</option>
                <option value="thriller">Thriller</option>
                <option value="documentary">Documentary</option>
            </select>
            </div>

            <div style={styles.formGroup}>
            <label htmlFor="releaseYear" style={styles.label}>
                Release Year
            </label>
            <input
                type="number"
                id="releaseYear"
                name="releaseYear"
                value={formData.releaseYear}
                onChange={handleChange}
                style={styles.input}
                min="1888"
                max="2030"
                placeholder="Enter release year"
                required
            />
            </div>

            <div style={styles.formGroup}>
            <label htmlFor="synopsis" style={styles.label}>
                Synopsis
            </label>
            <textarea
                id="synopsis"
                name="synopsis"
                value={formData.synopsis}
                onChange={handleChange}
                style={styles.textarea}
                placeholder="Enter movie synopsis"
                required
            />
            </div>

            <div style={styles.formGroup}>
            <label htmlFor="posterUrl" style={styles.label}>
                Poster Image URL
            </label>
            <input
                type="url"
                id="posterUrl"
                name="posterUrl"
                value={formData.posterUrl}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter poster image URL"
                required
            />
            </div>

            <div style={styles.buttonContainer}>
            <button
                type="submit"
                style={styles.submitButton}
            >
                Add Movie
            </button>
            <Link to='/'>
                <button
                    type="button"
                    style={styles.cancelButton}
                >
                    Cancel
                </button>
            </Link>
            </div>
        </form>
        </div>
    </div>
  );
};

export default AddMovieForm;