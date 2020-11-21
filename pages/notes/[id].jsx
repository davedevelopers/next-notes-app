import React from 'react';
import {useRouter} from 'next/router'

export default function Home (){
    const router = useRouter();

    const {id} = router.query;
    return (
        <h1>Note {id} page</h1>
    );
}