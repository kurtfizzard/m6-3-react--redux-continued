import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { receiveData, requestData } from "../../actions";
import { fetchArtistProfile } from "../../helpers/api-helpers";
import styled from "styled-components";
import { abbreviatedNumber } from "../../utilities";

const ArtistRoute = () => {
  const accessToken = useSelector((state) => state.auth.token);
  const currentArtist = useSelector((state) => state.artists.currentArtist);
  console.log(currentArtist);

  const artistId = useParams().id;

  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(requestData());
      fetchArtistProfile(accessToken, artistId).then((data) => {
        dispatch(receiveData(data));
      });
    }
  }, [accessToken]);

  if (currentArtist) {
    const { profile } = currentArtist;
    const { images, name, followers, genres } = profile;

    console.log(abbreviatedNumber(followers.total));

    return (
      <Wrapper>
        {/* {images.map((image) => {
          return <Image src={image.url} />;
        })} */}

        <Image src={images[2].url} />
        <Name>{name}</Name>
        <Followers>{abbreviatedNumber(followers.total)} followers</Followers>
        <Toptracks>top tracks</Toptracks>
        <Tracks>
          <Playbutton></Playbutton>
          <Playbutton></Playbutton>
          <Playbutton></Playbutton>
        </Tracks>
        <Tags>tags</Tags>
        {/* {genres.map((genre, index) => {
          if (index <= 1) {
            return <Genres>{genre}</Genres>;
          }
        })} */}
        <GenreOne>{genres[0]}</GenreOne>
        <GenreTwo>{genres[1]}</GenreTwo>
        <RelatedArtists>related artists</RelatedArtists>
      </Wrapper>
    );
  } else {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
};

const Wrapper = styled.div`
  background: #0b0f14;
  color: white;
  height: 100vh;
`;

const Image = styled.img`
  position: absolute;
  width: 175px;
  height: 175px;
  left: 104px;
  top: 59px;
  border-radius: 190.5px;
`;

const Name = styled.p`
  position: absolute;
  width: 268px;
  height: 59px;
  left: 54px;
  top: 173px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 59px;
  /* identical to box height */

  /* White */

  color: #ffffff;
  /* Triple shadow */

  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.75), 0px 4px 4px rgba(0, 0, 0, 0.5),
    4px 8px 25px #000000;
`;

const Followers = styled.p`
  position: absolute;
  width: 93px;
  height: 17px;
  left: 141px;
  top: 257px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-transform: lowercase;

  color: #ff4fd8;
`;

const Tracks = styled.div`
  position: absolute;
  width: 174px;
  height: 92px;
  left: 101px;
  top: 338px;

  display: flex;
  justify-content: space-between;
`;

const Toptracks = styled.p`
  position: absolute;
  width: 109px;
  height: 26px;
  left: 133px;
  top: 338px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  /* identical to box height */

  text-transform: lowercase;

  /* White */

  color: #ffffff;
`;

const DivHeader = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;

  text-transform: lowercase;
`;

const Playbutton = styled.div`
  background: rgba(75, 75, 75, 0.4);
  border-radius: 50%;
  height: 42px;
  width: 42px;
`;

const Tags = styled.p`
  position: absolute;
  width: 48px;
  height: 26px;
  left: 164px;
  top: 478px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  /* identical to box height */

  text-transform: lowercase;

  /* White */

  color: #ffffff;
`;

const Genres = styled.div`
  background: rgba(75, 75, 75, 0.4);
  border-radius: 4px;
`;

const GenreOne = styled.div`
  position: absolute;
  width: 93px;
  height: 29px;
  left: 61px;
  top: 528px;

  /* GrayFade */

  background: rgba(75, 75, 75, 0.4);
  border-radius: 4px;

  text-align: center;
`;

const GenreTwo = styled.div`
  position: absolute;
  width: 144px;
  height: 29px;
  left: 170px;
  top: 528px;

  /* GrayFade */

  background: rgba(75, 75, 75, 0.4);
  border-radius: 4px;
`;

const RelatedArtists = styled.div`
  position: absolute;
  width: 150px;
  height: 26px;
  left: 113px;
  top: 605px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  /* identical to box height */

  text-transform: lowercase;

  /* White */

  color: #ffffff;
`;

export default ArtistRoute;
