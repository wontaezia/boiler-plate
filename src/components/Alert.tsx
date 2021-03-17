import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { colors, flex } from '@styles/theme';
import gsap from 'gsap';

type AlertProps = {
    children: string;
    error: null | string;
    isLoading: boolean;
    isSuccess: boolean;
    onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
};

function Alert({ children, error, isLoading, isSuccess, onClick }: AlertProps) {
    useEffect(() => {
        if (isLoading) {
            gsap.to('.alert', {
                y: 0,
            });
        } else {
            gsap.to('.alert', {
                delay: 1.5,
                y: '-200%',
            });
        }

        return () => gsap.killTweensOf('.alert');
    }, [isLoading, error, isSuccess]);

    return (
        <div className="alert" css={container} onClick={onClick}>
            {error && !isLoading && !isSuccess ? (
                <span css={badges['error']}>{error}</span>
            ) : (
                <span css={isLoading ? badges['loading'] : badges['success']}>{children}</span>
            )}
        </div>
    );
}

export default Alert;

const container = css`
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(-200%);
    padding: 10px;
    width: 300px;
    background-color: white;
    font-size: 14px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

    span {
        position: relative;
        ${flex('center', 'center')}
    }
`;

const badgeDefault = css`
    content: '';
    display: inline-block;
    padding: 4px;
    margin-right: 6px;
    border-radius: 6px;
    color: #fff;
    font-size: 8px;
`;

const badges = {
    error: css`
        &::before {
            ${badgeDefault}
            background-color: ${colors.red}
        }
    `,
    loading: css`
        &::before {
            ${badgeDefault}
            background-color: ${colors.yellow}
        }
    `,
    success: css`
        &::before {
            ${badgeDefault}
            background-color: ${colors.green}
        }
    `,
};
