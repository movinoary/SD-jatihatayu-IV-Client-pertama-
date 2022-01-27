import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Title } from '../../../../../components'

const DatabaseKegiatanGaleriGet = () => {
    const [kegiatan, setKegiatan] = useState([])

    useEffect(() => {
        getKegiatan()
    }, [])

    const getKegiatan = async () => {
        const response = await axios.get('http://localhost:3210/kegiatan-Galeri')
        setKegiatan(response.data)
    }

    const deleteKegiatan = async (id) => {
        await axios.delete(`http://localhost:3210/kegiatan-Galeri/${id}`)
        getKegiatan()
    }

    return (
        <div>
            <div>
                <Title title='Data' subtitle='Kegiatan' titleend='Galeri' desc='berada di halaman profil subhalaman galeri kegiatan'/>
                <Link to='/dashboard/kegiatan-Galeri/add'>
                    <button className='button-normal'>Tambah Data Kegiatan Galeri</button>
                </Link>
            </div>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>No</th>
                        <th>Keterangan</th>
                        <th>Foto</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    { kegiatan.map((kegiatan, index) => (
                    <tr key={kegiatan.id}>
                        <td>{index + 1}</td>
                        <td>{kegiatan.keterangan}</td>
                        <td><img src={kegiatan.foto} alt='kegitan galeri' className='img-tabel' /></td>

                        <td>
                            <Link 
                                to={`/dashboard/kegiatan-galeri/update/${kegiatan.id}`} 
                                className='button-dash edit'
                            >
                                edit
                            </Link>
                            <button
                             onClick={() => deleteKegiatan(kegiatan.id) }
                             className='button-dash delete'
                            > 
                                delete
                            </button>
                        </td>
                    </tr>
                    )) }
                </tbody>
            </table>
        </div>
    )
}

export default DatabaseKegiatanGaleriGet
