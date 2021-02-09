import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { createRefetchContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import Box from '../../../Style/Box'
import RoomCard from '../RoomCard/RoomCard'
import Avatar from '@material-ui/core/Avatar'
import EditRoomProperties from '../EditRoomProperties/EditRoomProperties'
import RoomModal from '../RoomModal/RoomModal'
import { Checkbox, FormGroup, FormControlLabel, FormLabel, RadioGroup, Radio, Button, TextField, Container } from '@material-ui/core'
import FilterListIcon from '@material-ui/icons/FilterList'
import { debounce } from 'lodash'


//parameters to fragment containers
//https://stackoverflow.com/questions/44753480/pass-variables-to-fragment-container-in-relay-modern

// REFETCH CONTAINER AS PAGINATION CONTAINER
//https://medium.com/entria/relay-modern-pagination-using-refetch-container-editing-a07c6b33ae4e

//refetch and paginate 
//https://github.com/facebook/relay/issues/1792

const AllRoomsContainer = props => {

  const [modalOpen, setModalOpen] = useState(false)

  const [fiterOpen, setFilterOpen] = useState(false)
  const [roomsFilter, setRoomsFilter] = useState({ admin: true, invites: true, joined: true, publicOnly:true, publicRooms: undefined})
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSetSearchTerm =useCallback( debounce( term  => {
    setSearchTerm(term) 
    },1000),[])

  const handleSearchChange = e => {
    debouncedSetSearchTerm(e.target.value)
  }
  
  const handleToggleFilter = () => {
    setFilterOpen(!fiterOpen)
  }

  const roomsFilterChange = e => {
    setRoomsFilter({...roomsFilter, [e.target.name]: e.target.checked})
  }

  const roomsVisabilityChange = e => {
    const value = e.target.value === 'false' ? false : ( e.target.value ==='true' ? true : undefined )
    setRoomsFilter({...roomsFilter, [e.target.name]: value})
  }

  const handleToggleModal = () => {
    setModalOpen(!modalOpen)
  }
  const filterVariables = useMemo(
    () => { 
        return {
          admin: roomsFilter.admin,
          public: roomsFilter.publicRooms,
          joined: roomsFilter.joined,
          invite: roomsFilter.invites,
          publicOnly: roomsFilter.publicOnly,
          searchTerm
      }
    },[roomsFilter, searchTerm]
  )
  
  useEffect(
    () => {
      props.relay.refetch(
        filterVariables,// Our refetchQuery needs to know the `itemID`
        null,  // We can use the refetchVariables as renderVariables
        () => { console.log('Refetch done') },
        {force: true},  // Assuming we've configured a network layer cache, we want to ensure we fetch the latest data.
      )
    },[roomsFilter, searchTerm]
  )

  const onLoadMore = () => {
    // const { loading } = this.state;
    // if (loading) return;

    const { allRooms } = props.allRooms;  
    if (!allRooms || !allRooms.pageInfo.hasNextPage) return;
   
    //this.setState({ loading: true });
    const { endCursor } = allRooms.pageInfo;
    
    // Fetch 5 more comments
    const total = allRooms.edges.length + 5;
    const refetchVariables = {
     ...filterVariables,
     count: 5,
     cursor: endCursor,
    }
  
    const renderVariables = { count: total };
    props.relay.refetch(
     refetchVariables,
     renderVariables, 
     () => {
       console.log("loadMore DONE")
      //this.setState({ loading: false });
     }, {
      force: true,
     },
    )
   }
  
  const roomFilters = () => {
    return(
      <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<FilterListIcon />}
        style={{ margin: "10px" }}
        onClick={handleToggleFilter}
      >
        Filters
      </Button>
      <TextField id="standard-basic" label="Search" onChange={handleSearchChange} />
     {fiterOpen && <>
      <FormLabel component="legend">Room Visability</FormLabel>
      <RadioGroup row aria-label="position" name="public" onChange={roomsVisabilityChange}>
        <FormControlLabel
          control={<Radio color="primary" />}
          label="Both"
          labelPlacement="top"
          checked={roomsFilter.publicRooms == undefined}
          value={undefined}
          name="publicRooms"
        />
        <FormControlLabel
          control={<Radio color="primary" />}
          label="Public"
          labelPlacement="top"
          checked={roomsFilter.publicRooms}
          value={true}
          name="publicRooms"
        />
        <FormControlLabel
          control={<Radio color="primary" />}
          label="Private"
          labelPlacement="top"
          checked={roomsFilter.publicRooms == false}
          value={false}
          name="publicRooms"
        />
      </RadioGroup>
      
        <FormLabel component="legend">Filter</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="My Rooms"
          name="admin"
          labelPlacement="start"
          checked={roomsFilter.admin}
          onChange={roomsFilterChange}
  
        />
         <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Joined"
          name="joined"
          labelPlacement="start"
          checked={roomsFilter.joined}
          onChange={roomsFilterChange}
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Invites"
          name="invites"
          labelPlacement="start"
          checked={roomsFilter.invites}
          onChange={roomsFilterChange}
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Public Rooms"
          name="publicOnly"
          labelPlacement="start"
          checked={roomsFilter.publicOnly}
          onChange={roomsFilterChange}
        />
      </FormGroup>
      </>}
      </>
    )
  }

  const { allRooms } = props.allRooms
  
  return (
    <>
      {roomFilters()}
      <Box>
        <Box
          display='flex'
          flexWrap='wrap'
          p={1}
          m={1}
          justifyContent='center'
          color='white'
        >
          {allRooms &&
            allRooms.edges.map(({ node, cursor }) => {
              return (
                <RoomCard
                  userId={props.userId}
                  userName={props.userName}
                  key={cursor}
                  room={node}
                />
              )
            })}
        </Box>
        <Box position='fixed' bottom='25px' right='25px'>
          <RoomModal
            open={modalOpen}
            render={() => {
              return (
                <EditRoomProperties
                  create={true}
                  userId={props.userId}
                  handleToggleModal={handleToggleModal}
                />
              )
            }}
            userId={props.userId}
            handleToggleModal={handleToggleModal}
          />
          <Avatar onClick={handleToggleModal}>+</Avatar>
        </Box>
      </Box>
      <Container style={{textAlign:"center"}}><Button variant="contained" color="primary" onClick={onLoadMore} >Load More</Button></Container>
    </>
  )
}

export default createRefetchContainer(AllRoomsContainer, {
  allRooms: graphql`
    fragment AllRoomsContainer_allRooms on User @argumentDefinitions(
      admin: {type: "Boolean", defaultValue:true},
     joined:{ type:"Boolean", defaultValue: true },
     public:{ type:"Boolean"},
     invite:{ type:"Boolean", defaultValue: true },
     publicOnly:{ type:"Boolean", defaultValue:true }
     searchTerm:{ type:"String", defaultValue: "sanja" },
     count:{type:"Int", defaultValue:5},
     cursor:{type:"Cursor"}
  )
    {
      allRooms(first:$count, after:$cursor, _admin:$admin, _joined:$joined, _invite:$invite, _publicOnly:$publicOnly, _public:$public, _searchTerm:$searchTerm)
        @connection(key: "connection_allRooms", filters: []) {
        edges {
          cursor
          node {
              ...RoomCard_room
            }
        }
        pageInfo {
          hasNextPage
          endCursor
         }    
      }
    }
  `,
  },
    graphql`
    #refetchQuery
    query AllRoomsContainerRefetchQuery($admin: Boolean, $joined: Boolean, $invite: Boolean, $public: Boolean, $publicOnly:Boolean $searchTerm: String, $cursor: Cursor){
      currentProfile{
        id
        name
        ...AllRoomsContainer_allRooms @arguments(admin:$admin, joined:$joined,invite:$invite,public:$public, publicOnly:$publicOnly,searchTerm:$searchTerm, cursor:$cursor) 
      }
    }`
  )
