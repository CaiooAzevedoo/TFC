// import { Request, Response } from 'express';
// import { matchServices } from '../services';

// const allMatchs = async (req: Request, res: Response) => {
//   const { inProgress } = req.query;

//   let matchs;
//   if (!inProgress) {
//     matchs = await matchServices.allMatchs();
//   } else {
//     const inP = inProgress === 'true';
//     matchs = await matchServices.inProgressMatchs(inP);
//   }

//   return res.status(200).json(matchs);
// };

// const matchsControllers = {
//   allMatchs,
// };

// export default matchsControllers;