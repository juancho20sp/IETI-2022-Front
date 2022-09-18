import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

const secret = process.env.SECRET;

export default function middleware(req) {
  // const { cookies } = req;

  // const jwt = cookies.OursiteJWT;

  // const url = req.url;

  // if (url.includes('/login')) {
  //   if (jwt) {
  //     try {
  //       verify(jwt, secret);

  //       return NextResponse.redirect('/');
  //     } catch (err) {
  //       return NextResponse.redirect('/login');
  //     }
  //   }
  // }

  // if (url.includes('/')) {
  //   if (jwt === undefined) {
  //     return NextResponse.redirect('/login');
  //   }

  //   try {
  //     verify(jwt, secret);

  //     return NextResponse.next();
  //   } catch (err) {
  //     return NextResponse.redirect('/login');
  //   }
  // }

  return NextResponse.next();
}
