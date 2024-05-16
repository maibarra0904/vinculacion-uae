import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

const UserAccess = ({pass, setPassOk}) => {

    const [password, setPassword] = useState('')
 
    const handleChangePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
      };

    useEffect(() => {
        if (password === pass) {
            setPassOk(true)
        }
    },[password, pass, setPassOk])

  return (
    <div className="mb-4">
                  <label className="text-gray-800" htmlFor="password">
                    Ingrese Password:
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Ingrese el password para continuar"
                    name="password"
                    value={password}
                    onChange={handleChangePassword}
                    maxLength={30}
                  />
                </div>
  )
}

UserAccess.propTypes = {
    pass: PropTypes.bool.isRequired,
    setPassOk: PropTypes.func.isRequired,
  };

export default UserAccess