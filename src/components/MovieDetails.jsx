import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router';
import { asyncMountMovie } from '../store/actions/movieAcitons';
import { unMountMovieInfo } from '../store/actions/movieAcitons';

function MovieDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { Info } = useSelector((state)=>state.MovieInfo);

 console.log(Info)

  useEffect(()=>{
    dispatch(asyncMountMovie(id));

    return ()=>(
      dispatch(unMountMovieInfo())
    )
  },[])

  return (
    <div>MovieInfo</div>
  )
}

export default MovieDetails