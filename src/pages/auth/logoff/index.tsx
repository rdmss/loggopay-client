import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Logoff = () => {

    const router = useRouter();

    useEffect(() => {
        Cookies.remove('user');
        router.push("/auth/login");
    });

}

export default Logoff;