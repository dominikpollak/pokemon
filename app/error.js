'use client';

export default function Error(error) {
  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
}
