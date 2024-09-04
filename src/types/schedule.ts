export interface Lesson {
  day: number;
  start_time: string;
  end_time: string;
  classroom: string;
}

export interface Group {
  groups: any;
  group_id: string;
  description: string;
  lecturer: string;
  type: {
    number: number;
    description: string | null;
  };
  lessons: Lesson[];
  course: {
    semester: number;
    department: string;
    subject: string;
    credit_points: number;
  };
}

export interface SelectedGroupsSchema {
  groups: Group[];
}
