//กำหนดรูปแบบของข้อมูล Input
type RequestData = {
  date: string;
  request_id: string;
  created_at: string;
  request_process_id: number;
  current_state_id: number;
  user_uuid: string;
  category: string;
  item: string;
  detail: string;
  kpi: string[];
  line_id: number;
  line_name: string;
  section_code: number;
  section_name: string;
  department_name: string;
  work_center_code: string;
};

//ข้อมูล Input
const RequestDatas: RequestData[] = [
  {
    date: "2023-01-24",
    request_id: "ecc2f5fe-9c87-4ca2-a6f2-05065b18ec8f",
    created_at: "2023-01-24 14:48:28.302473",
    request_process_id: 2,
    current_state_id: 11,
    user_uuid: "b8be99a0-2ba8-5c56-9e82-ba7d1f2f5f7e",

    category: "Man",
    item: "เพิ่มพนักงานใหม่",
    detail: "เพิ่มพนักงานใหม่ 1 คน",
    kpi: ["No effect"],

    line_id: 83,
    line_name: "414274 - Alternator Rectifier S/A SE Type (2nd Line)",
    section_code: 414274,
    section_name: "Production 2",
    department_name: "Alternator Product",
    work_center_code: "A215",
  },
  {
    date: "2023-01-24",
    request_id: "ecc2f5fe-9c87-4ca2-a6f2-05065b18ec8f",
    created_at: "2023-01-24 14:48:28.302473",
    request_process_id: 2,
    current_state_id: 11,
    user_uuid: "b8be99a0-2ba8-5c56-9e82-ba7d1f2f5f7e",

    category: "Man",
    item: "เพิ่มพนักงานใหม่",
    detail: "เพิ่มพนักงานใหม่ 1 คน",
    kpi: ["No effect"],

    line_id: 83,
    line_name: "414274 - Alternator Rectifier S/A SE Type (2nd Line)",
    section_code: 414274,
    section_name: "Production 2",
    department_name: "Alternator Product",
    work_center_code: "A215",
  },
];

// กำหนดรูปเเบบผลลัพธ์
type Datedata = {
  man_waiting_review: number;
  man_approved: number;
  // machine_waiting_review: number;
  // machine_approved: number;
  // safety_waiting_review: number;
};

type ResultType = {
  [date: string]: Datedata;
};

var result: ResultType[] = [];

result.push({
  "Feb-23": {
    man_waiting_review: 0,
    man_approved: 0,
    // machine_waiting_review: 0,
    // machine_approved: 0,
    // safety_waiting_review: 0,
  },
});

//loop array RequestData
// const loopRequestData = RequestDatas.map(
//     request => request.date)



// ฟังก์ชั่นเพื่อการ สร้าง date หรือ เพิ่ม date
function genResultTable(
  request: RequestData
) {
  // ถ้ามี date อยู่เเล้ว ให้เพิ่มข้อมูลใน date
  if (request.date) {
    // result[date] = [
    //   ...result[date],
    //   {
    //     man_waiting_review: 0,
    //     man_approved: 0,
    //   },
    // ];.
    console.log('มี date นี้เเล้ว')
  } else {
    // result[date] = [
    //   {
    //     man_waiting_review: 0,
    //     man_approved: 0,
    //   },
    // ];
    
  }
}

// loop RequestDatas target  
// 1. เข้าถึง data0kd RequestDatas ทุกตัวได้ --->ให้ print date 
// 2. ใน obj เเต่ละตัว ให้ใช้ ฟังก์ชั่น genResultTable ในการ เพิ่ม/ สร้างใหม่ result จาก date 
RequestDatas.forEach((request) =>{
  console.log(request)
  genResultTable(
    request
  )


})



























// loop input ตาม date
// const loopRequestData = RequestDatas.forEach((request) => result.push({
//   /// ดู result type 
// }));

